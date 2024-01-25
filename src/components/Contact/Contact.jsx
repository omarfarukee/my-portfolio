
import './Contact.css'
const Contact = () => {
    return (
        <div className="c-back">
            <div className='flex justify-center pt-12 mb-10 text-3xl text-white'>
                Contact
            </div>
            {/* <div className='flex justify-center'>
                <div>
                    <div className="mb-5 field-group">
                        <input type="text" name="name" id='name' className="input-field" placeholder="Enter Name" autoComplete="off" />
                        <label htmlFor="name" className="input-label">Enter Name</label>
                    </div>
                    <div className="mb-5 field-group">
                        <input type="text" name="name" id='name' className="input-field" placeholder="Enter Name" autoComplete="off" />
                        <label htmlFor="name" className="input-label">Enter Name</label>
                    </div>
                    <div className="field-group">
                        <input type="text" name="name" id='name' className="input-field" placeholder="Enter Name" autoComplete="off" />
                        <label htmlFor="name" className="input-label">Enter Name</label>
                    </div>
                </div>

            </div> */}
            <div className='c-back'>
            <div className='wrapper'>
                <form action="">
                    <div className='input-box'>
                        <input type="text" placeholder='your email' />
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Subject' />
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='you message' />
                    </div>
                    <button type='submit' className='text-white c-button'>Submit</button>
                </form>
            </div>
            </div>
            

        </div>
    );
};

export default Contact;