import React from 'react';
import QRCode from 'react-qr-code';

const getQrData = (accountCode) => `2;RJ_SEAT;${accountCode}`;

const QrBox = ({ userAccountCode }) => (
  <div className="flex flex-col items-center gap-1">
    <QRCode value={getQrData(userAccountCode)} />
    {userAccountCode && (
      <div className="text-neutral-gray">Cislo uctu {userAccountCode}</div>
    )}
  </div>
);
export default QrBox;
