# Use uma imagem Python como base
FROM python:3.9-slim

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o script Python para o contêiner
COPY test.py .

# RUN pip install -r requirements.txt
RUN pip install Flask requests


# Exponha a porta em que o servidor webhook estará ouvindo
EXPOSE 8000

# Comando para executar o script quando o contêiner for iniciado
CMD ["python", "test.py"]
