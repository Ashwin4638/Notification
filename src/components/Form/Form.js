import React from 'react';

export class Form extends React.Component {
    state = {
        name: '',
        email: '',
        number: '',
        city: '',
        list: [],
        searchTerm: '',
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value})
    }
    onNumberChange = (event) => {
        this.setState({ number: event.target.value})
    }
    onCityChange = (event) => {
        this.setState({ city: event.target.value})
    }

    onSearchChange = (event) => {
        console.log(this.state.searchTerm)
        this.setState({ searchTerm: event.target.value})
        const list = [...this.state.list];

        if(this.state.searchTerm !== '' ){
            const results = list.filter(person =>
                person.includes(this.state.searchTerm)
              );
    
              this.setState({ list: results})
        }else {
            this.setState({
                list: [...this.state.list      ] })
        }
            
        
    }

    handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        this.setState({
            list: [...this.state.list,this.state.name, this.state.email,this.state.number,this.state.city]
        })
        this.setState({
            name: '',
            email: '',
            number: '',
            city: ''
        })
      };

      renderForm() {
        return (
            <div className='Form'>
                <form onSubmit={ this.handleSubmit}>
             <label>Name </label>
             <input type="text"  required value={ this.state.name} onChange={ this.onNameChange} />
             <label> Email</label>
             <input type="email"  required value={ this.state.email} onChange={ this.onEmailChange}/>
             <label>Number </label>
             <input type="number"  required value={ this.state.number} onChange={ this.onNumberChange}/>
             <label>City </label>
             <input type="text"  required  value={ this.state.city} onChange={ this.onCityChange}/>
             <input type="submit" />
             </form>
                    
            </div>
            )
      }

    render () {
        console.log('search', this.state.list)
        return (
            <div>
                { this.renderForm() }
                <br />
                <input
                type="text"
                placeholder="Search"
                value={ this.state.searchTerm}
                onChange={ this.onSearchChange}
                />
                <h3>Data</h3>
                { this.state.list.map((value, index) => 
                <div key={index}>
                <li>{value}</li>
                </div>)}
            </div>
        )
    }
}

export default Form;



           
