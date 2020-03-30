from flask import Flask, request
import os
from subprocess import call

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        call(["node", "Back-end/app.js"])
        print("File ran successfully")
    return 'Hello, world!'

if __name__ == '__main__':
    app.debug=True
    app.run(port=8080)
