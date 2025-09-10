from django.db import models

class Autor(models.Model):
    nombre = models.CharField(max_length=100)
    edad = models.IntegerField()

    def __str__(self):
        return self.nombre


class Libro(models.Model):
    titulo = models.CharField(max_length=200)
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo


class Capitulo(models.Model):
    titulo = models.CharField(max_length=200)
    libro = models.ForeignKey(Libro, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.titulo} ({self.libro.titulo})"


class Pagina(models.Model):
    numero = models.IntegerField()
    contenido = models.TextField()
    capitulo = models.ForeignKey(Capitulo, on_delete=models.CASCADE)

    def __str__(self):
        return f"Página {self.numero} de {self.capitulo.titulo}"
