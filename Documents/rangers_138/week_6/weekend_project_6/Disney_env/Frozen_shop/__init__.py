# External imports
from flask import Flask
from flask_migrate import Migrate

# Internal imports
from config import Config
from .blueprints.auth.routes import auth
from .blueprints.site.routes import site
from .models import login_manager, db


app = Flask(__name__)
app.config.from_object(Config)

# Registering
app.register_blueprint(site)
app.register_blueprint(auth)


db.init_app(app)
migrate = Migrate(app,db)


login_manager.init_app
login_manager.login_view = 'auth.sign_up'
login_manager.login_message = 'Log in please!'
login_manager.login_message_category = 'warning'


@app.route("/")
def Disney_Frozen():
   return "<p>Welcome to Alaia's Disney Frozen collection!</p>"


