'use client'
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataObject = {
                data: {
                    ...formData
                }
            };

            await fetch(`${process.env.NEXT_PUBLIC_CMS_URL!}/api/contact-forms`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataObject),
                cache: 'no-cache'
            });

            toast.success("Form submitted successfully!");
            // Optionally, clear the form fields after successful submission
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    };

    return (
        <div className="w-1/2">
            <form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
                <Input
                    label="Name"
                    isClearable
                    variant="bordered"
                    maxLength={255}
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                <div className="flex gap-8">
                    <Input
                        label="Email"
                        className="w-1/2"
                        isClearable
                        variant="bordered"
                        maxLength={255}
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                    <Input
                        label="Phone"
                        className="w-1/2"
                        isClearable
                        variant="bordered"
                        maxLength={14}
                        onChange={handleChange}
                        name="phone"
                        value={formData.phone}
                    />
                </div>
                <Textarea
                    label="Message"
                    isClearable
                    minRows={6}
                    maxRows={6}
                    variant="bordered"
                    maxLength={10000}
                    onChange={handleChange}
                    name="message"
                    value={formData.message}
                />
                <Button size="lg" color="white" variant="bordered" type="submit">Submit</Button>
            </form>
        </div>
    );
}
