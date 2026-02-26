from flask import Flask, request, send_from_directory
from markupsafe import escape

app = Flask(__name__)


@app.route("/request")
def get_requests():
    with open("requests.txt") as f:
        return escape(f.read())


@app.route("/request", methods=['POST'])
def add_request():
    with open("requests.txt", "a") as f:
        f.write(request.get_data(as_text=True) + "\n\n")
        return '', 204

@app.route('/')
def serve_index():
    return send_from_directory('public', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('public', path)

if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)