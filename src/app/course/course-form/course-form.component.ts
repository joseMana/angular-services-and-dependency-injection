import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CATEGORY_LIST } from 'src/app/shared/constants/category-list.constant';
import { CourseFormValidator } from 'src/app/shared/validators/course-form.validator';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  public courseForm;
  public isFormSubmitted = false;

  public categoryList = CATEGORY_LIST;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  // get contentsFormArray(): FormArray {
  //   return this.courseForm.get('contents') as FormArray;
  // }

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      title: new FormControl('test', [Validators.required, Validators.minLength(5), CourseFormValidator.forbiddenTitle]),
      description: new FormControl('Lorem ipsum dolor sit amet'),
      // author: new FormControl(null, [Validators.required]),
      // authorEmailAddress: new FormControl(null, [Validators.email, Validators.required]),
      isActive: new FormControl(false),
      category: new FormControl(null, [Validators.required]),
      author: new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        emailAddress: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(5)])
      }),
      contents: new FormArray([
        new FormGroup({
          title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
          level: new FormControl(null, [Validators.required])
        })
      ])
    });

    // this.courseForm = this.formBuilder.group({
    //   title: [null, [Validators.required, Validators.minLength(5), CourseFormValidator.forbiddenTitle]],
    //   description: ['Lorem ipsum dolor sit amet'],
    //   isActive: [true],
    //   author: this.formBuilder.group({
    //     name: [null, [Validators.required, Validators.minLength(3)]],
    //     emailAddress: [null, [Validators.required, Validators.email, Validators.minLength(5)]]
    //   }),
    //   contents: this.formBuilder.array([
    //     this.formBuilder.group({
    //       title: [null, [Validators.required, Validators.minLength(5)]],
    //       level: [null, [Validators.required]]
    //     })
    //   ])
    // });
  }

  onSuggestAuthorAlias(): void {
    this.courseForm.patchValue({
      author: {
        name: 'Author ' + (Math.floor(Math.random() * 100) + 1)
      }
    });
  }

  onAddContent(): void {
    // Form control
    // const contentControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

    // Form group
    // const contentControl = new FormGroup({
    //   title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //   level: new FormControl(null, [Validators.required])
    // });

    // using Form Builder
    const contentControl = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(5)]],
      level: [null, [Validators.required]]
    });

    this.courseForm.get('contents').push(contentControl);
  }

  onSubmit(): void {
    this.isFormSubmitted = true;

    if (!this.courseForm.valid) {
      console.log('Please correct invalid fields');
      console.log(this.courseForm);
      return;
    }

    console.log('Form is valid!');
    console.log(this.courseForm);
    this.courseForm.reset();
  }

}
