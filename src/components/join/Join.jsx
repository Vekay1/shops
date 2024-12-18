import './Join.css'
const Join = () => {
    return(<section className="join">
            <div className="join_section">
                <div className="join_text">
                    <h1>JOIN SHOPPING COMMUNITY TO</h1>
                    <h1>GET MONTHLY PROMO</h1>
                    <h2>Type your email down below and be young wild generation</h2>
                </div>
                <div className="join_mail">
                    <form className="join_form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Add your email here"
                            required
                            className="join_input"
                        />
                        <button type="submit" className="join_button">Subscribe</button>
                    </form>
                </div>
            </div>
    </section>);
}
export default Join;