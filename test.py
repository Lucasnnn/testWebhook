import http.server
import socketserver
import json

# Porta em que o servidor irá ouvir
PORT = 8000

# Manipulador do servidor que imprime os dados recebidos


class WebhookHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        payload = json.loads(post_data.decode('utf-8'))

        # Imprime os dados recebidos no console
        print("Dados recebidos:")
        print(json.dumps(payload, indent=4))

        self.send_response(200)
        self.end_headers()


# Configura o servidor para ouvir na porta especificada
with socketserver.TCPServer(("", PORT), WebhookHandler) as httpd:
    print("Servidor webhook está ouvindo na porta", PORT)
    httpd.serve_forever()
