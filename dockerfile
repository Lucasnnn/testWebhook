FROM python:3.8

WORKDIR /app

RUN pip install flask

COPY . .

EXPOSE 8000

CMD ["python", "test.py"]
