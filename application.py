from flask import Flask, render_template, jsonify, request
import scipy.io as sio

app = Flask(__name__)

@app.route('/')
def index():

    return render_template('index.html')


@app.route('/data', methods=['GET', 'POST'])
def send_data():

    if request.method == 'POST':
        if request.form['fault_type'] == '1':
            var_junbo = sio.loadmat('./data/var_lm1.mat')
        else:
            var_junbo = sio.loadmat('./data/var_lm2.mat')
        return jsonify({
            'H1': var_junbo['H1'][:,0].tolist(),
            'V1': var_junbo['V1'][:,0].tolist(),
            'alpha1': var_junbo['alpha1'][:,0].tolist(),
            'theta1': var_junbo['theta1'][:,0].tolist(),
            'q1': var_junbo['q1'][:,0].tolist(),
            'R0_H_inf': var_junbo['R0_H_inf'][0,:].tolist(),
            'R0_H_sup': var_junbo['R0_H_sup'][0,:].tolist(),
            'R1_H_inf': var_junbo['R1_H_inf'][0,:].tolist(),
            'R1_H_sup': var_junbo['R1_H_sup'][0,:].tolist(),
            'R2_H_inf': var_junbo['R2_H_inf'][0,:].tolist(),
            'R2_H_sup': var_junbo['R2_H_sup'][0,:].tolist(),
            'R0_V_inf': var_junbo['R0_V_inf'][0,:].tolist(),
            'R0_V_sup': var_junbo['R0_V_sup'][0,:].tolist(),
            'R1_V_inf': var_junbo['R1_V_inf'][0,:].tolist(),
            'R1_V_sup': var_junbo['R1_V_sup'][0,:].tolist(),
            'R2_V_inf': var_junbo['R2_V_inf'][0,:].tolist(),
            'R2_V_sup': var_junbo['R2_V_sup'][0,:].tolist()
        })


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
