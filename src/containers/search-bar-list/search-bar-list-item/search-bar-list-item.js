import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStyles } from './search-bar-list-item.styles';
import { getImage } from '../../../utils/imageLoad';
import productPlugLight from '../../../images/product-plug-light-theme-img.png';
import productPlugDark from '../../../images/product-plug-dark-theme-img.png';
import { IMG_URL } from '../../../configs';
import { ClassicButton } from '../../../components/classic-button/classic-button';
import { HOME_BUTTONS } from '../../../translations/homepage.translations';

const SearchBarListItem = ({ product }) => {
  const { language, currency, isLightTheme } = useSelector(
    ({ Language, Currency, Theme }) => ({
      language: Language.language,
      currency: Currency.currency,
      isLightTheme: Theme.lightMode
    })
  );

  const [image, setImage] = useState(IMG_URL + product.images.primary.small);
  const dispatch = useDispatch();
  const styles = useStyles({ image, isLightTheme });

  useEffect(() => {
    getImage(product.images.primary.small)
      .then((src) => setImage(src))
      .catch(() => setImage(isLightTheme ? productPlugLight : productPlugDark));

    return () => setImage(null);
  }, [isLightTheme, product.images.primary.small]);

  return (
    <div className={styles.searchBarListItem}>
      <div className={styles.image} style={{ backgroundSize: 'cover' }} />
      <div className={styles.content}>
        <div className={styles.title}>
          <Typography variant='h4'>{product.name[language].value}</Typography>
          <div>
            {product.basePrice[currency].value / 100}{' '}
            {product.basePrice[currency].currency}
          </div>
        </div>
        <div className={styles.buttons}>
          <ClassicButton
            buttonType='button'
            innerText={<ShoppingBasketIcon />}
            onClickHandler={() => {}}
            buttonStyle='classic'
          />
          <ClassicButton
            buttonType='button'
            innerText={HOME_BUTTONS[language].DETAILS}
            onClickHandler={() => dispatch(push(`/product/${product._id}`))}
            buttonStyle='classic'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBarListItem;
