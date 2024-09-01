import React from 'react';
import { useTranslation } from 'react-i18next';
import '../About/About.css'; // Ensure you have created a CSS file for styling

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>{t('aboutTitle')}</h1>
        <p>{t('aboutContent')}</p>
      </header>

      <section className="mission-section">
        <h2>{t('ourMission')}</h2>
        <p>
          {t('missionContent')}
        </p>
      </section>

      <section className="team-section">
        <h2>{t('meetTheTeam')}</h2>
        <div className="team-member">
          <img src="team-member1.jpg" alt="Team Member 1" className="team-member-img" />
          <div className="team-member-info">
            <h3>{t('teamMember1Name')}</h3>
            <p>{t('teamMember1Role')}</p>
            <p>{t('teamMember1Bio')}</p>
          </div>
        </div>
        <div className="team-member">
          <img src="team-member2.jpg" alt="Team Member 2" className="team-member-img" />
          <div className="team-member-info">
            <h3>{t('teamMember2Name')}</h3>
            <p>{t('teamMember2Role')}</p>
            <p>{t('teamMember2Bio')}</p>
          </div>
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className="values-section">
        <h2>{t('ourValues')}</h2>
        <ul>
          <li><strong>{t('valueAccessibility')}:</strong> {t('valueAccessibilityDesc')}</li>
          <li><strong>{t('valueInnovation')}:</strong> {t('valueInnovationDesc')}</li>
          <li><strong>{t('valueCommunity')}:</strong> {t('valueCommunityDesc')}</li>
        </ul>
      </section>

      <section className="contact-info">
        <h2>{t('contactUs')}</h2>
        <p>{t('contactDesc')} <a href="mailto:support@medic-locate.com">support@medic-locate.com</a>.</p>
      </section>
    </div>
  );
}

export default About;
