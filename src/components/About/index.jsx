import { profileImage } from "../../assets";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div>
          <img src={profileImage} className="profileImage" alt="profile" />
        </div>
        <p>
          Hi, I'm Nomin!
        </p>
        <p>
          I am a new graduate of the University of Denver fullstack coding bootcamp. I attended the University of Colorado Boulder for my undergrad and have a bachelor's degree in International Relations.
        </p>
        <p>I am an enthusiastic and dedicated junior full stack developer with a strong foundation in front-end and back-end web development. Currently seeking a challenging position where I can leverage my skills in HTML, CSS, JavaScript, MySQL, MongoDB, and server-side programming languages to create dynamic and responsive web applications. I am committed to collaborating with cross-functional teams to deliver high-quality code and user-centric solutions. Eager to expand my knowledge and expertise in full stack development while contributing to the success of an innovative organization.
        </p>
        <p>
          Currently residing in Centennial, I enjoy long walks with my dog, cooking, working out, and spending time with family and friends.
        </p>
      </div>
    </section>
  );
}

export default About;
