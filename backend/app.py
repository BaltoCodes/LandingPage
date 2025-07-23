from flask_cors import CORS
import os
from flask import Flask, request, jsonify, render_template, send_from_directory

app = Flask(__name__,  static_folder="static", static_url_path="/static")
CORS(app)



@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(app.static_folder, 'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/static/<path:path>')
def static_proxy(path):
    return send_from_directory(os.path.join(app.static_folder, 'static'), path)

@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({
        'status': 'success',
        'message': 'pong',
        'timestamp': '2024-01-01T00:00:00Z'
    })

@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'healthy',
        'service': 'landing-backend',
        'version': '1.0.0'
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5040))
    app.run(host='0.0.0.0', port=port, debug=True) 

 