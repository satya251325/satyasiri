const Home =()=>{

    const familyMembers = [
        {
          name: 'Family Member 1',
          description: 'Insert description about Family Member 1 here.',
        },
        {
          name: 'Family Member 2',
          description: 'Insert description about Family Member 2 here.',
        },
        // Add more family members here...
    ];

    return (
          <div>
               <main className="main">
                    <section id="about" className="section">
                    <div className="container">
                        <h2>About Our Family</h2>
                        <p>Insert a brief description of your family here.</p>
                    </div>
                    </section>
                    <section id="family-members" className="section">
                    <div className="container">
                        <h2>Family Members</h2>
                        <div className="card-container">
                        {familyMembers.map((member, index) => (
                            <div className="card" key={index}>
                            <h3>{member.name}</h3>
                            <p>{member.description}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    </section>
                    <section id="contact" className="section">
                    <div className="container">
                        <h2>Contact Us</h2>
                        <p>Insert contact information and form here.</p>
                    </div>
                    </section>
                </main>
          </div>
    )
}
export default Home;