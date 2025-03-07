import { useState } from "react";
import axios from "axios";

export const Login = () => {
    const [formData, setFormData] = useState({ email: "", pwd: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9000/api/auth/login", formData);
            alert(response.data.message);
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            alert(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
                padding: '20px',
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '12px',
                    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
                    width: '100%',
                    maxWidth: '420px',
                    textAlign: 'center',
                }}
            >
                <h1 style={{ marginBottom: '25px', color: '#222', fontSize: '1.8rem', fontWeight: '600' }}>
                    Login
                </h1>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#555', fontSize: '0.9rem' }}>
                        Email Address:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '1rem',
                            outline: 'none',
                            boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '25px' }}>
                    <label htmlFor="pwd" style={{ display: 'block', marginBottom: '8px', color: '#555', fontSize: '0.9rem' }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="pwd"
                        name="pwd"
                        value={formData.pwd}
                        onChange={handleChange}
                        required
                        style={{
                            width: '100%',
                            padding: '12px',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '1rem',
                            outline: 'none',
                            boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '500',
                        transition: 'background 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
                >
                    Login
                </button>
            </form>
        </div>
    );
};
