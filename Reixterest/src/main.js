import './style.css'

import Header from './components/Header/header';
import Main from './components/Main/Main';
import Footer from './components/Footer/footer';
import printHeaderTemplate from './components/Header/header';
import printTemplate from './components/Main/Main';
import printFooterTemplate from './components/Footer/footer';


const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

printHeaderTemplate();
printTemplate();
printFooterTemplate();

