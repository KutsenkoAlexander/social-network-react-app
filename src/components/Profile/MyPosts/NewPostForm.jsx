import styles from './MyPosts.module.css';
import React from 'react';
import {Form, Field} from 'react-final-form';
import FormStateToRedux from '../../Common/FormControls/FormStateToRedux';

const NewPostForm = (props) => (
    <Form onSubmit={props.addPost}
          initialValues={{newPostText: ''}}
          subscription={{submitting: true, pristine: true}}
          render={({handleSubmit, form, submitting, pristine}) => (
              <form className={styles.addPost} onSubmit={handleSubmit}>
                  <FormStateToRedux form='newPost'/>
                  <Field name={'newPostText'} component={'textarea'}/>
                  <button>Add post</button>
              </form>
          )}
    />
)

export default NewPostForm;