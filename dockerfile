FROM python:3.9-slim

WORKDIR /app

COPY test.py .

RUN pip install flask

EXPOSE 8000

CMD ["python", "webhook_test.py"]
