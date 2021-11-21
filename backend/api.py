from flask import Blueprint, jsonify, request, session
from flask_restful import Api, Resource
import json
import os
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit, execute, IBMQ
from qiskit.tools.monitor import job_monitor
from qiskit.providers.ibmq import least_busy
from model import convObject, judge
TOKEN = os.environ['TOKEN']
IBMQ.enable_account(TOKEN)
provider = IBMQ.get_provider(hub='ibm-q')

# postされたテキストをカウントするapi(POSTメソッド)
text_count_bp = Blueprint('text_count', __name__, url_prefix='/api/post')
class TextCount(Resource):
    def post(self):

        # postされたデータを読み込み
        input_data = request.json

        # 入力文字列の文字数をカウント
        #result_data = {'text':input_data['text'], 'count':len(input_data['text'])}

        #backend_lb = least_busy(provider.backends(simulator=False, operational=True))
        #print("Least busy backend: ", backend_lb)
        min = 0
        max = 2
        device = "ibmq_qasm_simulator"
        #device = "ibmq_lima"
        backend = provider.get_backend(device)
        #backend = device
        if device == "ibmq_qasm_simulator":
            num_q = 32
        else:
            num_q = 5

        q = QuantumRegister(num_q, 'q')
        c = ClassicalRegister(num_q, 'c')

        circuit = QuantumCircuit(q, c)
        circuit.h(q)  # Applies hadamard gate to all qubits
        circuit.measure(q, c)  # Measures all qubits


        job = execute(circuit, backend, shots=1)

        print('Executing Job...\n')
        job_monitor(job)
        counts = job.result().get_counts()

        print('RESULT: ', counts, '\n')
        print('Press any key to close')

        job_result = int(counts.most_frequent(), 2)

        output_num = min + job_result % (max+1 - min)
        input_num = input_data['input']
        input = convObject(input_num)
        output = convObject(output_num)
        result = judge(input_num,output_num)
        result_data  = {'input':input,'output':output,'result':result,'output_num':output_num}
    
        return jsonify(result_data)

text_count = Api(text_count_bp)
text_count.add_resource(TextCount, '')