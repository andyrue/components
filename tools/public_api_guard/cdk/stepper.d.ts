export declare class CdkStep implements OnChanges {
    _completedOverride: boolean | null;
    _displayDefaultIndicatorType: boolean;
    _showError: boolean;
    _stepper: CdkStepper;
    ariaLabel: string;
    ariaLabelledby: string;
    get completed(): boolean;
    set completed(value: boolean);
    content: TemplateRef<any>;
    get editable(): boolean;
    set editable(value: boolean);
    errorMessage: string;
    get hasError(): boolean;
    set hasError(value: boolean);
    interacted: boolean;
    label: string;
    get optional(): boolean;
    set optional(value: boolean);
    state: StepState;
    stepControl: AbstractControlLike;
    stepLabel: CdkStepLabel;
    constructor(_stepper: CdkStepper, stepperOptions?: StepperOptions);
    ngOnChanges(): void;
    reset(): void;
    select(): void;
    static ngAcceptInputType_completed: BooleanInput;
    static ngAcceptInputType_editable: BooleanInput;
    static ngAcceptInputType_hasError: BooleanInput;
    static ngAcceptInputType_optional: BooleanInput;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CdkStep, "cdk-step", ["cdkStep"], { "stepControl": "stepControl"; "label": "label"; "errorMessage": "errorMessage"; "ariaLabel": "aria-label"; "ariaLabelledby": "aria-labelledby"; "state": "state"; "editable": "editable"; "optional": "optional"; "completed": "completed"; "hasError": "hasError"; }, {}, ["stepLabel"], ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<CdkStep, [null, { optional: true; }]>;
}

export declare class CdkStepHeader implements FocusableOption {
    _elementRef: ElementRef<HTMLElement>;
    constructor(_elementRef: ElementRef<HTMLElement>);
    focus(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkStepHeader, "[cdkStepHeader]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkStepHeader, never>;
}

export declare class CdkStepLabel {
    template: TemplateRef<any>;
    constructor(/** @docs-private */ template: TemplateRef<any>);
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkStepLabel, "[cdkStepLabel]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkStepLabel, never>;
}

export declare class CdkStepper implements AfterContentInit, AfterViewInit, OnDestroy {
    protected _destroyed: Subject<void>;
    _groupId: number;
    protected _orientation: StepperOrientation;
    _stepHeader: QueryList<CdkStepHeader>;
    _steps: QueryList<CdkStep>;
    get linear(): boolean;
    set linear(value: boolean);
    get orientation(): StepperOrientation;
    set orientation(value: StepperOrientation);
    get selected(): CdkStep | undefined;
    set selected(step: CdkStep | undefined);
    get selectedIndex(): number;
    set selectedIndex(index: number);
    selectionChange: EventEmitter<StepperSelectionEvent>;
    readonly steps: QueryList<CdkStep>;
    constructor(_dir: Directionality, _changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef<HTMLElement>, _document: any);
    _getAnimationDirection(index: number): StepContentPositionState;
    _getFocusIndex(): number | null;
    _getIndicatorType(index: number, state?: StepState): StepState;
    _getStepContentId(i: number): string;
    _getStepLabelId(i: number): string;
    _onKeydown(event: KeyboardEvent): void;
    _stateChanged(): void;
    protected _updateOrientation(value: StepperOrientation): void;
    next(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    previous(): void;
    reset(): void;
    static ngAcceptInputType_completed: BooleanInput;
    static ngAcceptInputType_editable: BooleanInput;
    static ngAcceptInputType_hasError: BooleanInput;
    static ngAcceptInputType_linear: BooleanInput;
    static ngAcceptInputType_optional: BooleanInput;
    static ngAcceptInputType_selectedIndex: NumberInput;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkStepper, "[cdkStepper]", ["cdkStepper"], { "linear": "linear"; "selectedIndex": "selectedIndex"; "selected": "selected"; }, { "selectionChange": "selectionChange"; }, ["_steps", "_stepHeader"]>;
    static ɵfac: i0.ɵɵFactoryDef<CdkStepper, [{ optional: true; }, null, null, null]>;
}

export declare class CdkStepperModule {
    static ɵfac: i0.ɵɵFactoryDef<CdkStepperModule, never>;
    static ɵinj: i0.ɵɵInjectorDef<CdkStepperModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<CdkStepperModule, [typeof i1.CdkStep, typeof i1.CdkStepper, typeof i2.CdkStepHeader, typeof i3.CdkStepLabel, typeof i4.CdkStepperNext, typeof i4.CdkStepperPrevious], [typeof i5.BidiModule], [typeof i1.CdkStep, typeof i1.CdkStepper, typeof i2.CdkStepHeader, typeof i3.CdkStepLabel, typeof i4.CdkStepperNext, typeof i4.CdkStepperPrevious]>;
}

export declare class CdkStepperNext {
    _stepper: CdkStepper;
    type: string;
    constructor(_stepper: CdkStepper);
    _handleClick(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkStepperNext, "button[cdkStepperNext]", never, { "type": "type"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkStepperNext, never>;
}

export declare class CdkStepperPrevious {
    _stepper: CdkStepper;
    type: string;
    constructor(_stepper: CdkStepper);
    _handleClick(): void;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CdkStepperPrevious, "button[cdkStepperPrevious]", never, { "type": "type"; }, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<CdkStepperPrevious, never>;
}

export declare const STEP_STATE: {
    NUMBER: string;
    EDIT: string;
    DONE: string;
    ERROR: string;
};

export declare type StepContentPositionState = 'previous' | 'current' | 'next';

export declare const STEPPER_GLOBAL_OPTIONS: InjectionToken<StepperOptions>;

export interface StepperOptions {
    displayDefaultIndicatorType?: boolean;
    showError?: boolean;
}

export declare type StepperOrientation = 'horizontal' | 'vertical';

export declare class StepperSelectionEvent {
    previouslySelectedIndex: number;
    previouslySelectedStep: CdkStep;
    selectedIndex: number;
    selectedStep: CdkStep;
}

export declare type StepState = 'number' | 'edit' | 'done' | 'error' | string;
