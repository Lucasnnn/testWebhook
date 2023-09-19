FROM python:3.8

WORKDIR /app

RUN pip install flask gunicorn

COPY . .

EXPOSE 8000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "wsgi:app"]
