import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddNote() {
    const baseURL = `https://notepath-server.onrender.com/api/notes`;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const addNote = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(baseURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    description,
                }),
            });

            if (response.ok) {
                setTitle("");
                setDescription("");
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 2000);
            } else {
                console.log("Failed to submit data.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="breadcrumb-nav">
                <Link to="/" className="back-button">
                    👈 back
                </Link>
            </div>

            <form onSubmit={addNote}>
                <div className="single-note">
                    <div>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            className="title"
                            required
                        />
                    </div>

                    <div>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                            rows="4"
                            cols="50"
                            className="description"
                            required
                        ></textarea>
                    </div>
                </div>

                <input
                    className="save-note-button"
                    type="submit"
                    value={submitted ? "Saving note..." : "💾 Save Note"}
                    disabled={submitted}
                />

                <p className="text-center">
                    {submitted && (
                        <div className="success-message">
                            Note has been added!
                        </div>
                    )}
                </p>
            </form>
        </div>
    );
}
