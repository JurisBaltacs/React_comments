import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="I said nothing" avatar={faker.image.image()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 2:45PM" commentText="I said that" avatar={faker.image.image()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Today at 1:11PM" commentText="I said this" avatar={faker.image.image()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
