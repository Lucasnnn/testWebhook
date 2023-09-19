from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/webhook', methods=['POST'])
def webhook():
    content_type = request.headers.get('Content-Type')

    if content_type == 'application/x-www-form-urlencoded':
        data = request.form
    elif content_type == 'application/json':
        data = request.get_json()
    else:
        return jsonify({"error": "Tipo de conteúdo não suportado"}), 400

    print(data)

    return jsonify(data), 200


if __name__ == '__main__':
    app.run(port=8000)
