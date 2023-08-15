from flask import Flask,request
from youtube_transcript_api import YouTubeTranscriptApi
from newspaper import Article

app = Flask(__name__)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/transcript/<id>")
def get_transcript(id):
    captions = YouTubeTranscriptApi.get_transcript(id)
    transcript = ' '.join([d['text'] for d in captions])
    return transcript

@app.route("/api/grab")
def grab_article():
    url = request.args.get('url')
    article = Article(url)
    article.download()
    article.parse()
    return article.text