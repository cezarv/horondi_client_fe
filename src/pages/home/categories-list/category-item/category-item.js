import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './category-item.style';
import { getImage } from '../../../../utils/imageLoad';
import { HOME_BUTTONS } from '../../../../translations/homepage.translations';

const CategoryItem = ({
  categoryName,
  categoryImageUrl,
  categoryUrl,
  language
}) => {
  const [image, setImage] = useState(categoryImageUrl);

  useEffect(() => {
    getImage(categoryImageUrl)
      .then((src) => setImage(src))
      .catch((badSrc) => setImage(badSrc));
  }, [categoryImageUrl]);

  const styles = useStyles({ image });

  return (
    <div className={styles.categoryItem} data-cy='category-item'>
      <span className={styles.categoryName}>{categoryName}</span>
      <Link to={`/${categoryUrl}`} className={styles.categoryInner}>
        {HOME_BUTTONS[language].MOVE_TO_CATEGORY}
        <span>&#8594;</span>
      </Link>
    </div>
  );
};

export default CategoryItem;
