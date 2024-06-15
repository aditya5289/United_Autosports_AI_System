from flask import Flask, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():  # put application's code here
    if (request.method == 'GET'):
        return 'Hello World!'
    else: return 'Post?'

if __name__ == '__main__':
    app.run()
