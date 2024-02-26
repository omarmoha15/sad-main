// DashboardPage.js

import React from 'react';
import Logo from '../../iamge/sheet1/logo.png';
import Card from '../../components/Card';
import Sade from '../Data';
import './Dashboard.css';

class DashboardPage extends React.Component {
  state = {
    focus: false,
    searchQuery: '',
    sirensFilter: 'all',
    geotechnicalFilter: 'all',
    typeFilter: 'all',
    purposeFilter: 'all',
  };

  focus = (event) => {
    event.preventDefault();
    this.setState({
      focus: !this.state.focus,
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  handleSirensFilterChange = (event) => {
    this.setState({
      sirensFilter: event.target.value,
    });
  };

  handleGeotechnicalFilterChange = (event) => {
    this.setState({
      geotechnicalFilter: event.target.value,
    });
  };
  

  handleTypeFilterChange = (event) => {
    this.setState({
      typeFilter: event.target.value,
    });
  };

  handlePurposeFilterChange = (event) => {
    this.setState({
      purposeFilter: event.target.value,
    });
  };

  filterSade = () => {
    const { searchQuery, sirensFilter, geotechnicalFilter, typeFilter, purposeFilter } = this.state;
  
    return Sade.filter((item) => {
      // Apply search query filter
      const searchFilter = item.d_name.includes(searchQuery);
  
      // Apply filters for Sirens, Geotechnical, Type, and Purpose
      const sirensFilterCondition =
        sirensFilter === 'all' || (sirensFilter === 'yes' && item.Sirens === 1) || (sirensFilter === 'no' && item.Sirens === 0);
  
        const geotechnicalFilterCondition =
        geotechnicalFilter === 'all' ||
        (geotechnicalFilter === 'yes' && (item.Geotechnical === 1 || item.geotechnical === 1)) || // Include dams with geotechnical devices
        (geotechnicalFilter === 'no' && (item.Geotechnical === 0 && item.geotechnical === 0));
      const typeFilterCondition =
        typeFilter === 'all' || item.type.trim().toLowerCase() === typeFilter.trim().toLowerCase();
  
      // Check if 'purpose' exists before applying the filter condition
      const purposeFilterCondition =
        purposeFilter === 'all' || (item.purpose && item.purpose.trim().toLowerCase() === purposeFilter.trim().toLowerCase());

  
      return searchFilter && sirensFilterCondition && geotechnicalFilterCondition && typeFilterCondition && purposeFilterCondition;
    });
  };

  render() {
    const filteredSade = this.filterSade();

    return (
      <>
        <div className='container'>
          <div className="header" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
            <img style={{ margin: 0 }} src={Logo} alt='' className='logo' />
            <p style={{ margin: 0 }}> فرع وزارة البيئة والمياه والزراعة بمنطقة عسير</p>
            <p style={{ margin: 0 }}> ادارة التشغيل والصيانه / السدود</p>
          </div>

          <div className="">
            <input
              type="text"
              className={this.state.focus ? 'focused' : ''}
              placeholder="ادخل اسم السد"
              value={this.state.searchQuery}
              onChange={this.handleSearchChange}
            />
          </div>

          <div className="filter-bar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { id: 'sirens-filter', label: 'صافرات الانذار', state: this.state.sirensFilter, handler: this.handleSirensFilterChange },
              { id: 'geotechnical-filter', label: 'الأجهزة الجيوتقنية', state: this.state.geotechnicalFilter, handler: this.handleGeotechnicalFilterChange },
              { id: 'type-filter', label: 'نوع السد', state: this.state.typeFilter, handler: this.handleTypeFilterChange },
              { id: 'purpose-filter', label: 'الغرض من', state: this.state.purposeFilter, handler: this.handlePurposeFilterChange, options: ['الكل', 'استعاضة', 'حماية', 'للشرب'] },
            ].map((filter) => (
              <div key={filter.id} style={{ margin: '5px', textAlign: 'center' }}>
                <label htmlFor={filter.id}>{filter.label}:</label>
                <select
                  id={filter.id}
                  value={filter.state}
                  onChange={filter.handler}
                >
                  <option value="all">الكل</option>
                  {filter.options ? (
                    filter.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))
                  ) : (
                    <>
                      <option value="yes">موجودة</option>
                      <option value="no">غير موجودة</option>
                    </>
                  )}
                </select>
              </div>
            ))}
          </div>

          <div className="cards">
            {filteredSade.map((item) => (
              <Card
                key={item.id}
                id={parseInt(item.id, 10)}
                img={item.photo}
                title={item.d_name}
                description={`نوع السد: ${item.type}`}
                author={`المحافظة: ${item.governorate}`}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default DashboardPage;
