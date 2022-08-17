import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer, Nav, SideNav } from "../../components";
import style from "./index.module.css";
import { Main } from "./subpages";

function Docs() {
  const { subpage } = useParams();

  let component;

  if (!subpage) component = <Main />;
useEffect(() => {
  const link = document.querySelectorAll('a#link')
  ,sections = document.querySelectorAll('section')
  console.log(sections);
  const toggleLogic = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      /* eslint-disable */
      return (pageYOffset >= (sectionTop - sectionHeight / 3)) ?
        current = section.getAttribute('id')
        :
        current;

    });
    link.forEach(li => {
      li.classList.remove('active');
      if (li.classList.contains(current)) {
        li.classList.add('active');
      }
    })
  }
  window.addEventListener('scroll', toggleLogic);
  return window.removeEventListener('scroll', toggleLogic)
}, [])

  return (
    <div className={style.docs}>
      <Nav />
      <div className={style.main}>
        <SideNav />
        {component}
      </div>
      <Footer />
    </div>
  );
}

export default Docs;
