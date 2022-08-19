from flask import Flask
import socket

app = Flask(__name__)

@app.route("/")
def hello():
    html = """
    Welcome: {name}  <br>
    Hostname: {hostname} <br>
    """
    return html.format(name="Logan", hostname=socket.gethostname())

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8888)