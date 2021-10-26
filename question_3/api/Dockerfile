FROM python:3

ADD api_service.py /
ADD csv_parser.py /
ADD pitcher_blueprint.py /
ADD pitcher_manager.py /

RUN pip3 install flask
RUN pip3 install flask_restful
RUN pip3 install requests
RUN pip3 install pandas
RUN pip3 install Flask-Cors

# Copy CSV devtest file over to container
COPY devtest.csv data/devtest.csv

CMD ["python3", "./api_service.py"]