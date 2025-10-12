import uuid
import redis
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json



r = redis.Redis(host="localhost", port=6379, decode_responses=True)


def hide_secret(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8")).get("secret")
        if not data:
            return JsonResponse({"error": "No secret provided"}, status=400)

        key = str(uuid.uuid4())
        r.set(key, data)
        return JsonResponse({"key": key})

@csrf_exempt
def reveal_secret(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))
            key = data.get("key")
        except (json.JSONDecodeError, UnicodeDecodeError):
            return JsonResponse({"error": "Invalid JSON"}, status=400)

        if not key:
            return JsonResponse({"error": "No key provided"}, status=400)

        secret = r.get(key)
        if secret:
            r.delete(key)
            return JsonResponse({"secret": secret})
        else:
            return JsonResponse({"error": "This secret has been revealed or does not exist."}, status=404)

    return JsonResponse({"error": "Invalid method"}, status=405)
