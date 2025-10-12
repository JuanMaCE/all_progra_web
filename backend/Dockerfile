FROM python:3.11-bullseye

ENV LANG=C.UTF-8

RUN apt-get update && apt-get install -y \
    build-essential \
    gcc \
    libffi-dev \
    tzdata \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt /app/requirements.txt

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app

# Exponer puerto
EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
