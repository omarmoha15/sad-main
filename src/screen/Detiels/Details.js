// Details.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../../iamge/sheet1/logo.png'

const DetailsPage = ({ data }) => {
  const { id } = useParams();
  const selectedData = data.find((item) => item.id === id);

  if (!selectedData) {
    return <p>Item not found</p>;
  }

  const {
    photo,
    governorate,
    d_name,
    purpose,
    type,
    length,
    high,
    spillyway_h,
    capacity,
    date,
    north,
    east,
    Sirens,
    Portals,
    valves,
    Lighting,
    Generator,
    Guard,
    management,
    i_security,
  } = selectedData;

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '20px',
  };

  const imageStyle = {
    flex: '1',
    maxWidth: '50%',
  };

  const textStyle = {
    flex: '1',
    maxWidth: '50%',
    textAlign: 'left',
    padding: '20px',
  };
  const photoStyle = {
    width: '50%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
  };

  return (
    <div className='container'>
      <div className="header" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
  <img style={{ margin: 0 }} src={Logo} alt='' className='logo' />
  <h1 style={{ margin: 0 , color : '#200F61'}}> فرع وزارة البيئة والمياه والزراعة بمنطقة عسير</h1>
  <h2 style={{ margin: 0 , color : '#200F61'}}> ادارة التشغيل والصيانه / السدود</h2>
</div>
      <h2>تفاصيل السد</h2>
      <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div style={imageStyle}>
          <img src={photo} alt={d_name} style={photoStyle} />
        </div>
        <div className="card-body">
          <p><strong>المحافظة:</strong> {governorate}</p>
          <p><strong>اسم السد:</strong> {d_name}</p>
          <p><strong>الغرض:</strong> {purpose}</p>
          <p><strong>نوع السد:</strong> {type}</p>
          <p><strong>الطول:</strong> {length}</p>
          <p><strong>الارتفاع:</strong> {high}</p>
          <p><strong>ارتفاع الفتحة الفائقة:</strong> {spillyway_h}</p>
          <p><strong>السعة:</strong> {capacity}</p>
          <p><strong>تاريخ الانشاء:</strong> {date}</p>
          <p><strong>الشمال:</strong> {north}</p>
          <p><strong>الشرق:</strong> {east}</p>
          <p><strong>صافرات الإنذار:</strong> {Sirens === 1 ? 'موجود' : 'غير موجود'}</p>
          <p><strong>البوابات:</strong> {Portals === 1 ? 'موجود' : 'غير موجود'}</p>
          <p><strong>الصمامات:</strong> {valves === 1 ? 'موجود' : 'غير موجود'}</p>
          <p><strong>الإنارة:</strong> {Lighting === 1 ? 'موجود' : 'غير موجود'}</p>
          <p><strong>المولد:</strong> {Generator === 1 ? 'موجود' : 'غير موجود'}</p>
          <p><strong>الحراسة:</strong> {Guard === 1 ? 'موجود' : 'غير موجود'}</p>
          <p><strong>الإدارة:</strong> {management === 1 ? 'موجود' : 'غير موجود'}</p>
          <p><strong>الأمانة الداخلية:</strong> {i_security === 1 ? 'موجود' : 'غير موجود'}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
