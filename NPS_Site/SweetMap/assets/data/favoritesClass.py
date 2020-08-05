from sklearn import tree
import pandas as pd
import os

from flask import Flask
app = Flask(__name__)

from flask import request

@app.route("/")
def favoritesClass():
    activity = request.args.get('activity')
    landscape = request.args.get('landscape')
    climate = request.args.get('climate')
    return climate


df = pd.read_csv("favoritesActivity.csv")
#df.head()

target = df["faveYo"]
target_names = ["no", "yes"]

data = df.drop("faveYo", axis=1)
feature_names = data.columns
#data.head()

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(data, target, random_state=42)


clf = tree.DecisionTreeClassifier()
clf = clf.fit(X_train, y_train)
clf.score(X_test, y_test)


from sklearn.ensemble import RandomForestClassifier
rf = RandomForestClassifier(n_estimators=200)
rf = rf.fit(X_train, y_train)
rf.score(X_test, y_test)

sorted(zip(rf.feature_importances_, feature_names), reverse=True) 


