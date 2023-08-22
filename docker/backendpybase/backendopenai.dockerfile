FROM backendpybase
COPY requirements_openai.txt /root/requirements_openai.txt
WORKDIR /root
RUN python3.9 -m pip install -r requirements_openai.txt
CMD python3.9