import './footer.css';

const templateFooter = () => {
  return `
    <h4>Copyright 2023 - Inspirest - Rock the Code</h4>
    `
}

const printFooterTemplate = () => {
  document.querySelector("footer").innerHTML = templateFooter()
}

printFooterTemplate();

export default printFooterTemplate;