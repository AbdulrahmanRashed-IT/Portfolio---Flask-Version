from flask import Flask, render_template, request, flash, redirect, url_for
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  # Change this to a random secret key

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('index.html', _anchor='about')

@app.route('/services')
def services():
    return render_template('index.html', _anchor='services')

@app.route('/portfolio')
def portfolio():
    return render_template('index.html', _anchor='Portfolio')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Get form data
        name = request.form.get('Name')
        email = request.form.get('Email')
        message = request.form.get('Message')
        
        # Here you can add code to:
        # 1. Save to database
        # 2. Send email
        # 3. Save to file
        # 4. Or integrate with your Google Sheets script
        
        # For now, we'll just flash a success message
        flash(f'Thank you {name}! Your message has been sent successfully.', 'success')
        return redirect(url_for('contact'))
    
    return render_template('index.html', _anchor='contact')

# Routes for project pages
@app.route('/pharmacy')
def pharmacy():
    return render_template('pharmacy.html')

@app.route('/cafe_ordering_system')
def cafe_ordering_system():
    return render_template('cafe_ordering_system.html')

@app.route('/sandal')
def sandal():
    return render_template('sandal.html')

if __name__ == '__main__':
    app.run(debug=True)