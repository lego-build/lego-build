import { Community, Content, CTA, Productivity, Hero, Layout, Problem, Reason } from "../../components";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Problem />
            <Productivity />
            <Content />
            <Reason />
            <Community />
            <CTA />
            
        </Layout>
    );
}

export default Home;