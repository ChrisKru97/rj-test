import React from 'react';
import classNames from 'classnames';

const Alert = ({ children, headline, ...props }) => {
  const textClasses = 'text-secondary-bluedark2';

  return (
    <div
      className={
        'flex items-center p-1 text-14 rounded-sm bg-primary-bluelight2'
      }
      {...props}
    >
      <img
        src="info.svg"
        className={classNames(
          'w-3 sm:w-2.5 h-3 sm:h-2.5 mr-1.5 sm:mr-1 flex-shrink-0 fill-current',
          textClasses
        )}
        alt="info"
      />
      <div
        className={classNames(
          textClasses,
          'flex flex-col justify-center w-full'
        )}
      >
        {headline && (
          <div
            className="text-base font-bold"
            dangerouslySetInnerHTML={{ __html: headline }}
          />
        )}

        {typeof children === 'string' ? (
          <span dangerouslySetInnerHTML={{ __html: children }} />
        ) : (
          <span>{children}</span>
        )}
      </div>
    </div>
  );
};

export default Alert;
