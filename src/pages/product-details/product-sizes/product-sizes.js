import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useStyles from './product-sizes.styles';

import { SIZE } from '../../../translations/product-details.translations';

const ProductSizes = ({ handleSizeChange, sizes, sizeIsNotSelectedError }) => {
  const styles = useStyles();
  const { language, selectedSize } = useSelector(({ Language, Products }) => ({
    language: Language.language,
    selectedSize: Products.productToSend.selectedSize
  }));

  const sizeButtons = sizes
    ? sizes.map(({ _id, name, available }) =>
      available && name ? (
        <Button
          key={_id}
          className={
            _id === selectedSize ? styles.selectedSize : styles.sizeButton
          }
          onClick={(e) => handleSizeChange(e, _id)}
        >
          {name}
        </Button>
      ) : null
    )
    : null;

  return (
    <div className={styles.sizeButtons}>
      {sizeButtons.length ? (
        <div className={styles.container}>
          <div className={styles.label}>{SIZE[language].size}:</div>
          <div>
            <ButtonGroup data-cy='sizes'>{sizeButtons}</ButtonGroup>
          </div>
        </div>
      ) : null}
      {sizeIsNotSelectedError ? (
        <span className={styles.error}>{SIZE[language].error}</span>
      ) : null}
    </div>
  );
};

export default ProductSizes;
