import React from 'react';
import classNames from 'classnames';

const mapBaseClassesToVariant = {
  primary:
    'h4 border border-t-0 border-l-0 border-r-0 pb-1 mr-5 cursor-pointer',
  secondary: 'text-primary-blue text-14 px-3 py-1 cursor-pointer font-normal',
};

const mapSelectedClassesToVariant = {
  primary: 'text-primary-blue border-primary-blue',
  secondary: 'bg-primary-blue !text-neutral-white',
};

const mapUnselectedClassesToVariant = {
  primary: 'text-neutral-gray2 border-transparent',
  secondary: 'text-primary-blue',
};
const getClasses = ({ variant, selected, className }) =>
  classNames(
    mapBaseClassesToVariant[variant],
    selected
      ? mapSelectedClassesToVariant[variant]
      : mapUnselectedClassesToVariant[variant],
    className
  );

const NavLink = ({
  className,
  children,
  variant = 'primary',
  selected,
  onClick,
  ...props
}) => (
  <div onClick={onClick} role="tab">
    <h4 className={getClasses({ variant, selected, className })} {...props}>
      {children}
    </h4>
  </div>
);

export default NavLink;
