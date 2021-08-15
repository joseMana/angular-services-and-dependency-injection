import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CATEGORY_LIST } from 'src/app/shared/constants/category-list.constant';
import { CourseFormValidator } from 'src/app/shared/validators/course-form.validator';

@Component({
  selector: 'app-demo-course-form',
  templateUrl: './demo-course-form.component.html',
  styleUrls: ['./demo-course-form.component.scss']
})
export class DemoCourseFormComponent implements OnInit {

  public categoryList = CATEGORY_LIST;
  public courseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  get contentsFormArray(): FormArray {
    return this.courseForm.get('contents') as FormArray;
  }

  ngOnInit(): void {
    // this.courseForm = new FormGroup({
    //   title: new FormControl(null, [Validators.required, Validators.minLength(5), CourseFormValidator.forbiddenTitle]),
    //   description: new FormControl(null, [Validators.required]),
    //   category: new FormControl(null, [Validators.required]),
    //   isActive: new FormControl(true),
    //   author: new FormGroup({
    //     name: new FormControl(null, [Validators.required]),
    //     emailAddress: new FormControl(null, [Validators.required, Validators.email])
    //   }),
    //   contents: new FormArray([
    //     new FormGroup({
    //       title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //       level: new FormControl(null, [Validators.required])
    //     })
    //   ])
    // });

    this.courseForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(5), CourseFormValidator.forbiddenTitle]],
      description: ['Lorem ipsum dolor sit amet', [Validators.required]],
      isActive: [true],
      category: [null, [Validators.required]],
      author: this.formBuilder.group({
        name: [null, [Validators.required, Validators.minLength(3)]],
        emailAddress: [null, [Validators.required, Validators.email, Validators.minLength(5)]]
      }),
      contents: this.formBuilder.array([
        this.formBuilder.group({
          title: [null, [Validators.required, Validators.minLength(5)]],
          level: [null, [Validators.required]]
        })
      ])
    });
  }

  onSubmit(): void {
    console.log(this.courseForm);

    if (!this.courseForm.valid) {
      console.log('Form is invalid');
      return;
    }

    this.courseForm.reset();
  }

  onAddContent(): void {
    // Form control
    // const contentControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

    // Form group
    const contentControl = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      level: new FormControl(null, [Validators.required])
    });

    // using Form Builder
    // const contentControl = this.formBuilder.group({
    //   title: [null, [Validators.required, Validators.minLength(5)]],
    //   level: [null, [Validators.required]]
    // });

    const control = this.courseForm.get('contents') as FormArray;
    control.push(contentControl);
  }

  onSuggestAuthorAlias(): void {
    this.courseForm.patchValue({
      author: {
        name: 'Author ' + (Math.floor(Math.random() * 100) + 1)
      }
    });

    this.courseForm.setValue({
      // ... put all props here
    });
  }

}
