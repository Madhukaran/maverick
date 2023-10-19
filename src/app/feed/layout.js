'use client';
import Header from "../../components/header";

export default function DashboardLayout(props) {
    return (
        <section>
            <Header />
            {props.children}
        </section>
    )
}
