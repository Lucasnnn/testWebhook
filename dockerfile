# Use a imagem base do Python 3.8
FROM python:3.8

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os requisitos do aplicativo (arquivo requirements.txt) para o contêiner
COPY requirements.txt .

# Instale as dependências do aplicativo
RUN pip install -r requirements.txt

# Copie os arquivos do aplicativo para o contêiner (certifique-se de que seu aplicativo está na mesma pasta que este Dockerfile)
COPY . .

# Exponha a porta em que o Gunicorn irá escutar (substitua a porta pelo que você configurou no Gunicorn)
EXPOSE 8000

# Inicie o Gunicorn para executar seu aplicativo
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "wsgi:app"]
