import React from 'react';
import PropTypes from 'prop-types';

export default class StringControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
  };

  componentDidMount() {
    console.info(`[INFO STRINGCONTROL_didMount] ${this.props.forID}`);
  }

  // componentDidUpdate() {
  //   console.info(`[INFO STRINGCONTROL_didUpdate] ${this.props.forID}`);
  // }

  componentWillUnmount() {
    console.info(`[INFO STRINGCONTROL_willUnmount] ${this.props.forID}`);
  }

  // shouldComponentUpdate(nextProps) {
  //   const changed = {};

  //   for (const [k, v] of Object.entries(nextProps)) {
  //     if (this.props[k] !== v) {
  //       changed[k] = typeof v;
  //     }
  //   }

  //   if (Object.keys(changed).length > 0) {
  //     // console.info(
  //     //   `[INFO STRINGCONTROL_changedProps] ${this.props.uniqueFieldId ||
  //     //     ''} -> ${nextProps.uniqueFieldId || ''}`,
  //     //   changed,
  //     // );
  //   }

  //   return this.props.value !== nextProps.value;
  // }

  _sel = 0;

  handleChange = e => {
    const el = e.target;
    console.log('[INFO handleChange]', [el.selectionStart, el.selectionEnd]);
    this._sel = el.selectionStart;
    this.props.onChange(e.target.value);
  };

  // HRM... this seems to work for simple text inputs
  componentDidUpdate() {
    if (this._input && this._input.selectionStart !== this._sel) {
      console.info('[WARN] Setting selection');
      this._input.setSelectionRange(this._sel, this._sel);
    }
  }

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;

    console.log('[INFO] StringControl#render', this.props.value);
    console.log(
      '[INFO selection] render',
      this._input && [this._input.selectionStart, this._input.selectionEnd],
    );

    return (
      <input
        ref={el => {
          this._input = el;
        }}
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        onChange={this.handleChange}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      />
    );
  }
}
