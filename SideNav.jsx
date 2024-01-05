import React, { useState } from 'react';
import './YourComponent.css';
import Header from './Header'
import Popup from './Popup';
import SlideDrawer from '../components/SlideDrawer'



const YourComponent = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);


  const handleToggleSideNav = () => {
    setShowSideNav(true); // Set showSideNav to true to always show SideNavBar
  };

  const handleCampaignClick = () => {
    if (showDrawer) {
        // drawer open/close
        setShowDrawer(false);
      } else {
        setShowDrawer(true);
      }

  };

  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };


  return (
    <div className="container">
         <div className={`header ${showSideNav ? 'shifted' : ''}`} onClick={handleToggleSideNav}> 
         <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="41" height="25" viewBox="0 0 41 25" fill="none">
          <path d="M1.4375 0.8125H39.5625M1.4375 12.5H39.5625M1.4375 24.1875H39.5625" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
       
      </div>
      <div className={`sidenav ${showSideNav ? 'visible' : ''}` }>
        
        <h3 style={{width: '10.6875rem',height: '4.6875rem',
}} onClick={handleCampaignClick}><svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" viewBox="0 0 37 30" fill="none">
  <path d="M30.8335 2.5H6.16683C4.62516 2.5 3.0835 3.625 3.0835 5V8.7625C3.0835 9.6625 3.74641 10.4375 4.62516 10.875V25C4.62516 26.375 6.321 27.5 7.7085 27.5H29.2918C30.6793 27.5 32.3752 26.375 32.3752 25V10.875C33.2539 10.4375 33.9168 9.6625 33.9168 8.7625V5C33.9168 3.625 32.3752 2.5 30.8335 2.5ZM23.1252 17.5H13.8752V15H23.1252V17.5ZM30.8335 8.75H6.16683V5L30.8335 4.975V8.75Z" fill="black"/>
</svg><br /> Inventory</h3>

        <h3 style={{top:'45%'}} onClick={handleCampaignClick}><svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" viewBox="0 0 56 57" fill="none">
  <path d="M55.6185 6.25449C55.4581 5.93877 55.254 5.6695 55.0178 5.46206C54.7816 5.25461 54.5178 5.11307 54.2417 5.0455C53.9656 4.97794 53.6825 4.98568 53.4086 5.06829C53.1347 5.1509 52.8753 5.30675 52.6453 5.52695L0.38325 55.749C0.7665 56.5006 1.40525 57 2.1245 57H53.8772C55.0532 57 56 55.6866 56 54.073V7.88726C55.9875 7.30344 55.8546 6.73645 55.6168 6.25209L55.6185 6.25449ZM3.3565 5.52935C3.03845 5.22486 2.66595 5.04498 2.27901 5.00904C1.89207 4.9731 1.50531 5.08245 1.16025 5.32534C0.815184 5.56824 0.524859 5.93551 0.320445 6.38772C0.116032 6.83993 0.00525145 7.35999 0 7.89207V54.1499L24.8833 26.1743L3.3565 5.52935Z" fill="black"/>
</svg><br />Campaing</h3>

<h3 style={{top:'65%'}}  onClick={handleCampaignClick}><svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" viewBox="0 0 41 33" fill="none">
  <path d="M11.9582 2.75H5.12484C4.67176 2.75 4.23724 2.89487 3.91686 3.15273C3.59649 3.41059 3.4165 3.76033 3.4165 4.125V28.875C3.4165 29.2397 3.59649 29.5894 3.91686 29.8473C4.23724 30.1051 4.67176 30.25 5.12484 30.25H11.9582C12.4112 30.25 12.8458 30.1051 13.1661 29.8473C13.4865 29.5894 13.6665 29.2397 13.6665 28.875V4.125C13.6665 3.76033 13.4865 3.41059 13.1661 3.15273C12.8458 2.89487 12.4112 2.75 11.9582 2.75ZM8.5415 28.875C7.86575 28.875 7.20517 28.7137 6.64331 28.4115C6.08144 28.1094 5.64352 27.6799 5.38492 27.1774C5.12632 26.6749 5.05865 26.1219 5.19049 25.5885C5.32232 25.0551 5.64773 24.5651 6.12556 24.1805C6.60339 23.7959 7.21218 23.5339 7.87495 23.4278C8.53771 23.3217 9.22469 23.3762 9.84901 23.5843C10.4733 23.7925 11.0069 24.1449 11.3824 24.5972C11.7578 25.0494 11.9582 25.5811 11.9582 26.125C11.9582 26.8543 11.5982 27.5538 10.9575 28.0695C10.3167 28.5853 9.44766 28.875 8.5415 28.875ZM11.9582 16.5H5.12484V4.125H11.9582V16.5Z" fill="black"/>
  <path d="M8.55892 27.5137C9.50241 27.5137 10.2673 26.8981 10.2673 26.1387C10.2673 25.3793 9.50241 24.7637 8.55892 24.7637C7.61543 24.7637 6.85059 25.3793 6.85059 26.1387C6.85059 26.8981 7.61543 27.5137 8.55892 27.5137Z" fill="black"/>
  <path d="M17.1006 2.75V15.1388H25.6423V2.75H17.1006ZM29.0418 2.75V15.1388H37.5835V2.75H29.0418ZM17.1006 17.875V30.25H25.6423V17.875H17.1006ZM29.0418 17.875V30.25H37.5835V17.875H29.0418Z" fill="black"/>
</svg><br />Product</h3>

<h3 style={{top:'85%'}}><svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" viewBox="0 0 32 32" fill="none">
  <path d="M30 8H20V6H30V8ZM28 14H24V16H28V14ZM20 14H2V16H20V14ZM24 26H2V28H24V26ZM14 20H2V22H14V20ZM30 20H20V22H30V20ZM16 4V10H2V4H16ZM14 6H4V8H14V6Z" fill="black"/>
</svg><br />Keyword</h3>
      </div>
      
      <div className="content">
      </div>
      {showDrawer && <SlideDrawer onClose={handleCloseDrawer} />}
    </div>
  );
};

export default YourComponent;
