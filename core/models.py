from django.db import models

class Autor(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.nombre

class Libro(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Autor, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo
    
class Capitulo(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Libro, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.titulo} ({self.libro.titulo})"
    
class Pagina(models.Model):
    number = models.IntegerField()
    content = models.TextField()
    chapter = models.ForeignKey(Capitulo, on_delete=models.CASCADE)

    def __str__(self):
        return f"Página {self.numero} de {self.capitulo.titulo}"
