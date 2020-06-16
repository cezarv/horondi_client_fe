import React from 'react';
import { connect } from 'react-redux';
import withGraphqlService from '../../hoc/withGraphqlService';

const Test = ({ graphqlService }) => {
  const handler = () => {
    graphqlService
      .getAllItems(
        `query{
        categories{
          categoryCode,
          _id
        }
      }`
      )
      .then((res) => res);

    graphqlService
      .getAllItems(
        `query{
        category(id:"5ee7a23c30238d32798ae4a9"){
          categoryCode
          _id
          name{
              lang
              value
          }
          images{
              large
          }
        }
      }`
      )
      .then((res) => res);
  };
  return (
    <div>
      <button type='button' onClick={handler}>
        test
      </button>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = {};

export default withGraphqlService()(
  connect(mapStateToProps, mapDispatchToProps)(Test)
);